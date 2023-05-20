export enum RowState {
    danger ='danger',
    warning = 'warning',
    normal = 'normal'
}

export interface RowItem {
    state?: RowState
    [key: string]: any
}