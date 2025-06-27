//import * as M from 'materialize-css';
declare const M: any;
export class MaterialService {
    // static toast(message:string) {
    //     M.toast({html: message});
    // }
    static toast(message: string) {
        console.log('MaterialService.toast вызван с сообщением:', message);
        
        // Проверяем, доступен ли Materialize
        if (typeof M !== 'undefined' && M.toast) {
            console.log('Materialize доступен, показываем toast');
           // const toast = M.toast;
           // M.toast({html: message, displayLength: 4000});
           // Создаем toast с правильными параметрами
            M.toast({
                html: message,
                displayLength: 40000,
                activationPercent: 0.8,
                inDuration: 300,
                outDuration: 375,
                classes: 'red' // Добавляем красный цвет для ошибок
            });
        } else {
            console.warn('Materialize недоступен, используем alert');
            alert(message);
        }
    }

// static toast(message: string) {
//     if (M && M.toast) {
//       M.toast({
//         html: message,
//         classes: 'red',         // класс для красного цвета (ошибка)
//         displayLength: 4000     // время показа в мс
//       });
//     } else {
//       alert(message);
//     }
//  }

    
}