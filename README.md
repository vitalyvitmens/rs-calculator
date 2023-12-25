# РЕШЕНИЕ ЗАДАЧИ ПО GIT

- Скачали исходный проект
- Разархивировали
- Открыли его в VS-code => TERMINAL => Git Bash => npm i
- Если после выполнения команды в файле package-lock.json произошли изменения, то добавляем их и коммитим:
- git add package-lock.json
- git commit -m "chore(package-lock.json): описываем что произошло"
- Если после выполнения команды npm i не произошло изменений в файле package-lock.json, выполнении ребэйза в Задаче #1 вторая команда будет отличаться: git rebase -i HEAD~2
- npm run dev

## Задача #1

### Чтобы извлечь изменение с установкой:

- git checkout 69a8ad8ff38cd21cc7ee8eafe640deafe4516081
- git rebase -i HEAD~3

- edit 91e7052 install ant design
- pick 19523d4 add support alias path
- pick 69a8ad8 add antd theme

- Ctrl + S
- Закрыть

- git reset HEAD^
- отредактируйте файл package.json и удалите строку с "@types/node": "20.1.3"
- git add package.json

- git rebase --continue
- git commit --amend --no-edit
- git rebase --continue
- git add package-lock.json
- git rebase --continue
- git commit --amend --no-edit
- git rebase --continue

### Чтобы переместить коммит B в ветку development:

- git checkout development
- git cherry-pick 19523d4f0e5cc9cc0ce66a98cfd678b85d228940

### Чтобы обновить ветку featureadd-ant-design по development:

- git checkout feature/add-ant-design
- git rebase development

### Чтобы влить ветку feature/add-ant-design в development:

- git checkout development
- git merge feature/add-ant-design

## Задача #2

### Чтобы влить оставшиеся ветки (feature/core, feature/calculator, feature/calculator-actions) в development:

- git checkout feature/core
- git rebase development
- git checkout development
- git merge feature/core

- git checkout feature/calculator
- git rebase development
- git checkout development
- git merge feature/calculator

- git checkout feature/calculator-actions
- git rebase development
- git checkout development
- git merge feature/calculator-actions

## Задача #3

### Чтобы применить патчи в приложение:

- Создаем папку patches и складываем в неё наши патчи
- git am ./patches/\*
- Удаляем папку patches

## Задача #4

### Чтобы создать репозиторий на GitHub или GitLab и загрузить в него локальный репозиторий:

- Находясь на ветке development:
- git rebase main
- Это вызвовет конфликты, которые нужно разрешить вручную. После разрешения конфликтов, выполняем команду git rebase --continue, чтобы завершить rebas

- git checkout main
- git merge development

- Проверяем работоспособность приложения в браузере, если всё гуд, то можем удалить ненужные ветки с помощью команд:
- git branch -D feature/add-ant-design
- git branch -D feature/core
- git branch -D feature/calculator
- git branch -D feature/calculator-actions
- git branch -D development

- Githud => New | + => Repository name (rs-calculator) => Create repository => SSH => git remote add origin git@github.com:vitalyvitmens/rs-calculator.git

- VS-code => git remote add origin git@github.com:vitalyvitmens/rs-calculator.git => git push (в случае ошибки: git push --set-upstream origin main)

- Gitlub => + => New project/repository => Create blank project => Project URL (rs-calculator) => Public => Убрать галочку README => Create project => git remote add origin git@github.com:vitalyvitmens/rs-calculator.git

- VS-code => git remote add origin-gl git@gitlub.com:vitalyvitmens/rs-calculator.git => git push

- git tag 1.0.0
- git push --tags
- Github => Code => Releases => Create a new release => Choose a tag (1.0.0) => Release title (1.0.0) => Describe this release (Инициализировали проект и подготовили к продакшну) => Generaterelease notes => Publish release
