import * as React from 'react';

import { faSign } from "@fortawesome/free-solid-svg-icons"
import { pkgGerenciador } from "../model/db"

export const noauth = pkgGerenciador.defProcess({
    args: {
        idx: {},
        types: {},
    },
    caption: "Identifique-se",
    icon: faSign,
    id: "noauth",
    roles: "public",
    subscriptions: {},
    vars: {},
}).tasks({
    h: {
        actions: {},
        step() {
            return {
                actions: this.actions,
                caption: "sem permissao",
                render() {
                    return <div>sem permissao</div>
                },
            }
        }
    }
}).def({
    onOpen() {
        return {
            projectLid: "noauth" as GUID,
            taskId: "h",
        }
    }
})