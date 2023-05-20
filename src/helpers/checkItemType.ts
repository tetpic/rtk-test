export enum ItemType {
    link='link', 
    date="date",  
    boolean='boolean', 
    object='object', 
    array='array',
    string='string'
}

function checkStringType(el: string) {
    el = el.trim()
    if(el.indexOf('http://') == 0 || el.indexOf('https://') == 0) {
        return ItemType.link
    }
    else if (!Number.isNaN(Date.parse(el))) {
        return ItemType.date
    }
    else {
        return ItemType.string
    }

}

export function checkItemType(el:any) {
    let type = typeof el

    switch(type) {
        case ItemType.boolean:
            return type;
        
        case ItemType.object:
            return Array.isArray(el)?ItemType.array:ItemType.object

        case ItemType.string:
            return checkStringType(el)
    }
   

}