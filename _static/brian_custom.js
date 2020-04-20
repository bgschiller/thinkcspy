ActiveCode.prototype.flashBackground = function() {
  // Provide a visual cue that the code was re-run, as I was getting feedback
  // that, when restructuring code that shouldn't have changed output, they
  // were worried about whether the program had actually run again.
  this.output.classList.remove('ac-code-changed');
  // reflow to ensure that the class removal is synced to DOM
  void this.output.offsetWidth;
  // add .ac-code-changed to trigger background animation
  this.output.classList.add('ac-code-changed');
};

ActiveCode.prototype.oldRunProg = ActiveCode.prototype.runProg;
ActiveCode.prototype.runProg = function() {
  this.flashBackground();
  return this.oldRunProg();
};
