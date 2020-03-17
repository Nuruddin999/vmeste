export const setTasksTest = () => {
      let tasks = [];
      for (let index = 0; index <= 50; index++) {
            let status = ""
            let number = index + 1;
            if (number == 1) {
                  status = "Выбрать откликнувшегося"
            }
            if (number == 2) {
                  status = "Ожидание отклика"
            }
            if (number % 3 == 0 && number % 2 != 0) {
                  status = "В работе"
            }
            if (number % 4 == 0) {
                  status = "Подтвердить выполнение"
            }
            if (number % 5 == 0) {
                  status = "Черновик"
            }



            let task = {
                  id: index + 1,
                  date: "",
                  type: "Задание",
                  name: "Доставка коробки",
                  descrShort: "Необходимо помочь с продольствием",
                  category: "Продовльствие",
                  descrDetailed: "",
                  address: "Склад Надежда",
                  telephone: "89298777777",
                  startDate: "Sat Jan 18 2020 16:08:00 GMT+0300 (Москва, стандартное время)",
                  endDate: "Sat Jan 28 2020 19:00:00 GMT+0300 (Москва, стандартное время)",
                  startAddress: "г Махачкала,ул Синявина,3",
                  endAddress: "г Махачкала, ул Пушкина 11",
                  taskFlowShort: "забрать продукты со склада, отвезти подопечному",
                  taskFlowDetailed: ["Забрать две коробки", "Созвониться с подопечным", "Отвезти подопечному коробки", "Подписать акт"],
                  currentStatus: status
            };

            tasks.push(task)
      }
      console.log(tasks)
      return tasks
}
export const getTasksTest = (page) => {

      let tasks = setTasksTest();
      let fetchedTasks = []
      for (let i = page * 10 - 10; i < page * 10; i++) {
            fetchedTasks.push(tasks[i]);
      }
      console.log(fetchedTasks)
      return fetchedTasks
}