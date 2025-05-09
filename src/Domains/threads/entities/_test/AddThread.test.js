const AddThread = require('../AddThread');

describe('an AddThread entity', () => {
  it('should throw error when payload did not contain needed property', () => {
    
    const payload = {
      title: 'Example Title',
    };

    expect(() => new AddThread(payload)).toThrowError('ADD_THREAD.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload property has invalid data type', () => {
    const payload = {
      title: 123,
      body: ['bukan string'],
      owner: true,
    };

    expect(() => new AddThread(payload)).toThrowError('ADD_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should throw error when title is missing', () => {
    const payload = {
      body: 'some body',
      owner: 'user-123',
    };

    expect(() => new AddThread(payload)).toThrowError('ADD_THREAD.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when body is missing', () => {
    const payload = {
      title: 'some title',
      owner: 'user-123',
    };

    expect(() => new AddThread(payload)).toThrowError('ADD_THREAD.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when title is not a string', () => {
    const payload = {
      title: 123,
      body: 'valid body',
      owner: 'user-123',
    };

    expect(() => new AddThread(payload)).toThrowError('ADD_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should throw error when body is not a string', () => {
    const payload = {
      title: 'valid title',
      body: { text: 'object' },
      owner: 'user-123',
    };

    expect(() => new AddThread(payload)).toThrowError('ADD_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should throw error when title contains more than 100 characters', () => {
    const payload = {
      title: 'a'.repeat(101),
      body: 'valid body',
      owner: 'user-123',
    };

    expect(() => new AddThread(payload)).toThrowError('ADD_THREAD.TITLE_LIMIT_CHAR');
  });

  it('should create AddThread object correctly', () => {
    const payload = {
      title: 'Example Title',
      body: 'Example Body',
      owner: 'user-123',
    };

    const { title, body, owner } = new AddThread(payload);

    expect(title).toEqual(payload.title);
    expect(body).toEqual(payload.body);
    expect(owner).toEqual(payload.owner);
  });
});
