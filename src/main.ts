import './styles/main.scss';

export {};

function bootstrapApp() {
  const appEl = document.querySelector('#app');

  appEl!.innerHTML = /*html*/ `
    <div class="page-container">
      <header class="header">
        <h1>Finance</h1>
      </header>

      <div class="page-section flex-row justify-end">
        <button class="primary-btn">Adicionar</button>
      </div>

      <div class="page-section flex-row">
        <div class="flex-grow">
          <div class="expenses">Gastos</div>
          <strong class="value">-R$3000</strong>
        </div>

        <div class="flex-column flex-grow align-center">
          <div class="expenses">Gastos</div>
          <strong class="value">-R$3000</strong>
        </div>

        <div class="flex-column flex-grow align-end">
          <div class="expenses">Gastos</div>
          <strong class="value">-R$3000</strong>
        </div>
      </div>

    </div>
  `;
}

bootstrapApp();
