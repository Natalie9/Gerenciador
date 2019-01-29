import { auth } from './driver';
import { sessao } from "./sessao";

let crudTarefa: ReturnType<typeof sessao.query.gerenciador.tarefa.subscribe>
export function tarefa() {
    return crudTarefa
}

auth.onAuthStateChanged((user) => {

    if (crudTarefa) {
        crudTarefa.off()
        crudTarefa = undefined as any
    }
    if (user) {
        crudTarefa = sessao.query.gerenciador.usuario.subscribe(user.uid as GUID)

        sessao.runInTransaction((t) =>
            t.gerenciador.cadastrarTarefa("tarefa" || "?"))
    }

})
export function cadTarefa(nome: string){
    sessao.runInTransaction((t) =>
    t.gerenciador.cadastrarTarefa(nome || "?"))
}