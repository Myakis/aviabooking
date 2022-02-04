import airPlane from './airPlane.js';

const readyPlane = (forms, main, tourData, h1) => {
  const data = [];

  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      for (let el of form.elements) {
        el.disabled = true;
      }
      data.push({
        name: form.name.value,
        ticket: form.ticket.value,
      });
      if (forms.length === data.length) {
        forms.forEach(form => {
          form.remove();
        });
        airPlane(main, data, tourData, h1);
      }
    });
  });
};

export default readyPlane;
