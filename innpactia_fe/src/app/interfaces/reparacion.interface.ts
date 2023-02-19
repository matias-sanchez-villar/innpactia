export interface Reparacion{
    readonly idCliente?: number,
    readonly id?: number,
    readonly idTelefono: string,
    readonly titulo?: string,
    readonly descripcion?: string,
    readonly fecha: Date,
}