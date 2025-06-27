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
            M.toast({html: message, displayLength: 4000});
        } else {
            console.warn('Materialize недоступен, используем alert');
            alert(message);
        }
    }
}