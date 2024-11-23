window.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".gr-input");
  
    sliders.forEach(slider => {
      new GradientRangeSlider(slider);
    });
  });
  
  class GradientRangeSlider {
    constructor(input) {
      this.input = input;
      this.input?.addEventListener("input", this.update.bind(this));
      this.update();
    }
  
    update(e) {
      let value = this.input.defaultValue;
  
      if (e) value = e.target?.value;
      else this.input.value = value;
  
      const min = this.input.min || 0;
      const max = this.input.max || 100;
      const percentRaw = ((value - min) / (max - min)) * 100;
      const percent = +percentRaw.toFixed(2);
      const handle = 1.25 * (1 - percent / 100) - 0.875;
      const percentStyle = `calc(${percent}% + ${handle}em)`;
  
      this.input.parentElement?.style.setProperty("--percent", percentStyle);
    }
  }
  
  