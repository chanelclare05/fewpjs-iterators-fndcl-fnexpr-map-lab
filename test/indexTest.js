describe('index.js', function () {
  describe('titleCased()', function () {
    it('returns an array with title case tutorial names', function () {
      expect(titleCased()).to.have.all.members(
        [
          "What Does The This Keyword Mean?",
          "What Is The Constructor Oo Pattern?",
          "Implementing Blockchain Web Api",
          "The Test Driven Development Workflow",
          "What Is Nan And How Can We Check For It",
          "What Is The Difference Between Stoppropagation And Preventdefault?",
          "Immutable State And Pure Functions",
          "What Is The Difference Between == And ===?",
          "What Is The Difference Between Event Capturing And Bubbling?",
          "What Is Jsonp?"
      ]
      )
    });
  });
});
