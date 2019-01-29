import * as React from 'react';

import { faSign } from "@fortawesome/free-solid-svg-icons"
import { pkgGerenciador } from "../model/db"
import { sessao } from "../model/sessao"

export const login = pkgGerenciador.defProcess({
    args: {
        idx: {},
        types: {},
    },
    caption: "Identifique-se",
    icon: faSign,
    id: "login",
    roles: "public",
    subscriptions: {},
    vars: {},
}).tasks({
    h: {
        actions: {},
        step() {
            return {
                actions: this.actions,
                caption: "loginForm",
                render() {
                    return sessao.user ? <div>{sessao.user.name}</div> :
                        <div onClick={logar}>login google</div>
                    function logar() {
                        sessao.auth.loginGoogle()
                    }
                },
            }
        }
    }
}).def({
    onOpen() {
        return {
            projectLid: "loginForm" as GUID,
            taskId: "h",
        }
    }
})
