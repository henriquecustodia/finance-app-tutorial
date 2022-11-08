export {};

function bootstrapApp() {
  const appEl = document.querySelector('#app');

  appEl!.innerHTML = `
    <div class="fixed z-20 h-full w-full bg-slate-800 opacity-30"></div>
    
    <div class="fixed z-50 right-[calc(50%-150px)] top-[calc(50%-150px)] bg-slate-800 h-full w-full max-h-[300px] max-w-[300px] mx-0">
      <div class="text-slate-300">
        efefwfwe fwfew f
      </div>
    </div>

    <div class="container max-w-screen-sm mx-auto shadow-md p-4">
      
      <div class="flex justify-end">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add</button>
      </div>
      
      <div class="my-2 flex">
        <div>
          <div>Incomes</div>
          <strong class="text-green-600 text-lg">
            +R$3000,00
          </strong>
        </div>

        <div class="mx-auto">
          <div>Balance</div>
          <strong class="text-red-600 text-lg">
            R$3000,00
          </strong>
        </div>

        <div>
          <div>Expenses</div>
          <strong class="text-red-600 text-lg">
            -R$3000,00
          </strong>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="flex shadow-md p-4 my-2">
          <div>fwefewf wefewfwef wefwewf wefwe fwefewfwfef wef ewfewfew</div>  
          <div class="ml-auto pl-2 text-green-600">+R$3000,00</div>
        </div>

        <div class="flex shadow-md p-4 my-2">
          <div>fwefewf wefewfwef wefwewf wefwe fwefewfwfef wef ewfewfew</div>  
          <div class="ml-auto pl-2 text-red-600">-R$3000,00</div>
        </div>

        <div class="flex shadow-md p-4 my-2">
          <div>fwefewf wefewfwef wefwewf wefwe fwefewfwfef wef ewfewfew</div>  
          <div class="ml-auto pl-2 text-red-600">-R$3000,00</div>
        </div>

        <div class="flex shadow-md p-4 my-2">
          <div>fwefewf wefewfwef wefwewf wefwe fwefewfwfef wef ewfewfew</div>  
          <div class="ml-auto pl-2 text-red-600">-R$3000,00</div>
        </div>
        
      </div>
      
    </div>
  `;
}

bootstrapApp();
