const axios = require('axios');
const url = require('url');
const app = require('../src/app');
const { nanoid } = require('nanoid');

const port = app.get('port') || 8998;
const getUrl = (pathname) =>
  url.format({
    hostname: app.get('host') || 'localhost',
    protocol: 'http',
    port,
    pathname,
  });

describe('Feathers application tests (with jest)', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(port);
    server.once('listening', () => done());
  });

  afterAll((done) => {
    server.close(done);
  });

  it('starts and shows the index page', async () => {
    expect.assertions(1);

    const { data } = await axios.get(getUrl());

    expect(data.indexOf('<html lang="en">')).not.toBe(-1);
  });

  describe('404', () => {
    it('shows a 404 HTML page', async () => {
      expect.assertions(2);
      try {
        await axios.get(getUrl('path/to/nowhere'), {
          headers: {
            Accept: 'text/html',
          },
        });
      } catch (error) {
        const { response } = error;

        expect(response.status).toBe(404);
        expect(response.data.indexOf('<html>')).not.toBe(-1);
      }
    });

    it('shows a 404 JSON error without stack trace', async () => {
      expect.assertions(4);

      try {
        await axios.get(getUrl('path/to/nowhere'));
      } catch (error) {
        const { response } = error;

        expect(response.status).toBe(404);
        expect(response.data.code).toBe(404);
        expect(response.data.message).toBe('Page not found');
        expect(response.data.name).toBe('NotFound');
      }
    });
  });

  describe('/game-boards', () => {
    it('could reach game boards route', async () => {
      expect.assertions(1);
      const { status } = await axios.get(getUrl('/game-boards'));
      expect(status).toBe(200);
    });

    it('should get a game board with key first-one', async () => {
      expect.assertions(2);
      const {
        data: { data },
        status,
      } = await axios.get(getUrl('/game-boards'));
      expect(status).toBe(200);
      expect(data.filter((x) => x.key === 'first-one').length).toBe(1);
    });

    it('should be able to create a game board', async () => {
      expect.assertions(2);
      const key = `test-${nanoid(5)}`;
      const url = getUrl('/game-boards');
      const {
        status,
        data: { key: resKey },
      } = await axios.post(url, {
        key,
      });
      expect(status).toBe(201);
      expect(resKey).toBe(key);
    });
  });
});
