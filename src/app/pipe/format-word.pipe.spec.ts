import { FormatWordPipe } from './format-word.pipe';

describe('FormatWordPipe', () => {
  it('create an instance', () => {
    const pipe = new FormatWordPipe();
    expect(pipe).toBeTruthy();
  });
});


describe('Check word', () => {

  it ('should have a word Admin', () => {
    const pipe = new FormatWordPipe();
    expect(pipe.transform('afif')).toEqual('afif (Admin)');
  });
});
