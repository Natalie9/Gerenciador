import { auth } from './driver';
import { sessao } from "./sessao";

let usuarioLogado: ReturnType<typeof sessao.query.gerenciador.usuario.subscribe>
export function usuario () {
    return usuarioLogado
}

 // tslint:disable-next-line:no-debugger
 debugger
auth.onAuthStateChanged((user) => {

    if (usuarioLogado) {
        usuarioLogado.off()
        usuarioLogado = undefined as any
    }
    if (user) {
        usuarioLogado = sessao.query.gerenciador.usuario.subscribe(user.uid as GUID)
        usuarioLogado.listen((err, doc) => {
             // tslint:disable-next-line:no-debugger
        debugger
            if (!doc) {
                sessao.runInTransaction((t) =>
                    t.gerenciador.cadastrarUsuario(user.uid, user.displayName || "?"))
            }
        })
    }
})