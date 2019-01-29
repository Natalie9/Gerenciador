import * as React from 'react';

import { faUser } from "@fortawesome/free-solid-svg-icons"
import { Entry, Form } from '@hoda5/h5doc';
import { usuario } from 'src/model/usuarioLogado';
import { pkgGerenciador } from "../model/db";


export const perfilUsuario = pkgGerenciador.defProcess({
    args: {
        idx: {},
        types: {},
    },
    caption: "Perfil",
    icon: faUser,
    id: "perfilUsuario",
    roles: "auth",
    subscriptions: {},
    vars: {},
}).tasks({
    h: {
        actions: {},
        step() {
            return {
                actions: this.actions,
                caption: "Perfil",
                render() {
                    const j = usuario()

                    // if (!(j && j.loaded)) {
                        
                    //     return <div>carregando</div>
                    // }

                    const p = j.editables

                    return <Form>
                        <Entry caption="Nome" field={p.nome} />
                        <Entry field={p.nome} />
                    </Form>
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