
import {
    booleanType,
    defCollectionSmall,
    defPkgDB,
    numberType,
    stringType,
} from "@hoda5/h5doc"

export const tarefa = defCollectionSmall({
    collections: {},
    fields: {
        nome: stringType({
            maxLen: 40,
            minLen: 3,
        }),
        status: booleanType({
        })
    },
})


export const usuario = defCollectionSmall({
    collections: {},
    fields: {
        nome: stringType({
            maxLen: 40,
            minLen: 3,
        }),
        tarefas: numberType({
            decimals: 0,
            min: 0,
        })
      
    },
})



export const pkgGerenciador = defPkgDB({
    collections: {
        tarefa,
        usuario,
    },
    operations: {
        async cadastrarTarefa(t, uid: string, nome: string) {
            return t.tarefa.insert(uid as GUID, {
                nome,
                status: true,
            })
        },
        async cadastrarUsuario(t, uid: string, nome: string) {
            return t.usuario.insert(uid as GUID, {
                nome,
                tarefas: 0,
            })
        },
        async atualizarTarefa(t, uid: string, nome: string, status: boolean) {
            return t.tarefa.insert(uid as GUID, {
                nome,
                status,
            })
        },
        
    },
    uses: {},
})
