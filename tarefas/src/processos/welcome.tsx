import * as React from 'react';

import { faSign } from "@fortawesome/free-solid-svg-icons"
import { sessao } from 'src/model/sessao';
import { usuario } from 'src/model/usuarioLogado';
import { pkgGerenciador } from "../model/db"

export const welcome = pkgGerenciador.defProcess({
    args: {
        idx: {},
        types: {},
    },
    caption: "Bem vindo",
    icon: faSign,
    id: "welcome",
    roles: "public",
    subscriptions: {},
    vars: {},
}).tasks({
    h: {
        actions: {},
        step() {
            return {
                actions: this.actions,
                caption: "Bem vindo",
                render() {
                    const j = usuario()

                    return <div>
                        <div>Bem vindo {j && j.doc ? j.doc.nome : " SEM NOME "}</div>
                        <button onClick={deslogar}>Sair</button>
                    </div>
                    function deslogar() {
                        sessao.auth.logout()
                    }
                },
            }
        }
    }
}).def({
    onOpen() {
        return {
            projectLid: "welcome" as GUID,
            taskId: "h",
        }
    }
})