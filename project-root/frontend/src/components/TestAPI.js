import { useEffect } from 'react';

function TestAPI() {
  useEffect(() => {
    // Запрос к API при загрузке компонента
    fetch('http://localhost:8000/api/test', {
      credentials: 'include' // Для передачи кук (если нужно)
    })
      .then(r => r.json())
      .then(data => console.log('Ответ от бэкенда:', data))
      .catch(error => console.error('Ошибка:', error));
  }, []);

  return <div>Проверка подключения к API...</div>;
}

export default TestAPI;