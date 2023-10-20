

async function fetchAndCopyFirstAndLast10() {
  try {
    const response = await fetch('https://your-api-url/posts');
    const data = await response.json();
    
    if (data.length >= 20) {
      const first10 = data.slice(0, 10);
      const last10 = data.slice(data.length - 10);
      console.log('Первые 10 элементов:', first10);
      console.log('Последние 10 элементов:', last10);
    } else {
      console.log('Недостаточно элементов в массиве');
    }
  } catch (error) {
    console.error('Ошибка:', error);
  }
}


N2

async function fetchAndCopyUserIdAndTitle() {
  try {
    const response = await fetch('https://your-api-url/posts');
    const data = await response.json();
    
    const filteredData = data.map(post => ({ userId: post.userId, title: post.title }));
    console.log('Массив с полями userId и title:', filteredData);
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

      


N3

async function fetchAndDisplayData() {
  try {
    const response = await fetch('https://your-api-url/posts');
    const data = await response.json();
    
    const container = document.getElementById('data-container');
    container.innerHTML = ''; // Очистка контейнера
    
    data.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;
      container.appendChild(postElement);
    });
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

          

N4

async function fetchAndCopyEvenAndOddIds() {
  try {
    const response = await fetch('https://your-api-url/posts');
    const data = await response.json();
    
    const evenIds = data.filter(post => post.id % 2 === 0);
    const oddIds = data.filter(post => post.id % 2 !== 0);
    
    console.log('Массив с четными id:', evenIds);
    console.log('Массив с нечетными id:', oddIds);
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

N5   
async function fetchAndCopyEvery10thElement() {
  try {
    const response = await fetch('https://your-api-url/posts');
    const data = await response.json();
    
    const every10thElement = data.filter((_, index) => (index + 1) % 10 === 0);
    console.log('Каждый 10-й элемент:', every10thElement);
  } catch (error) {
    console.error('Ошибка:', error);
  }
}
