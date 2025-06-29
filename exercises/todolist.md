Вот небольшое задание, которое поможет вам закрепить навыки работы с React:

### Задание: Создание простого приложения "Список задач" (To-Do List)

#### Цель:
Создать приложение, которое позволяет пользователям добавлять, удалять и отмечать задачи как выполненные.

#### Функциональные требования:
1. **Добавление задачи**:
   - Пользователь может ввести текст задачи в текстовое поле и нажать кнопку "Добавить", чтобы добавить задачу в список.

2. **Отображение задач**:
   - Все добавленные задачи должны отображаться в виде списка.
   - Каждая задача должна иметь кнопку "Удалить", чтобы пользователь мог удалить задачу из списка.
   - Каждая задача должна иметь возможность быть отмеченной как выполненная (например, при нажатии на задачу она должна менять свой стиль).

3. **Сохранение состояния**:
   - Используйте `useState` для управления состоянием списка задач.
   - Каждая задача может быть объектом с полями `id`, `text` и `completed`.

#### Структура компонентов:
- **App**: основной компонент, который содержит состояние и логику.
- **TaskList**: компонент, который отображает список задач.
- **Task**: компонент, который представляет отдельную задачу.

#### Дополнительные улучшения (по желанию):
- Добавьте возможность редактирования задачи.
- Используйте `localStorage` для сохранения задач, чтобы они не пропадали при перезагрузке страницы.
- Добавьте фильтрацию задач (например, показать только выполненные или невыполненные).

### Подсказки:
- Используйте `map` для отображения списка задач.
- Для уникальности задач можно использовать `Date.now()` или библиотеку `uuid` для генерации уникальных идентификаторов.
- Не забудьте обрабатывать события, такие как `onClick` и `onChange`.

Это задание поможет вам попрактиковаться в создании компонентов, управлении состоянием и работе с событиями в React. Удачи! Если возникнут вопросы, не стесняйтесь спрашивать!
