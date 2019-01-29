import * as React from 'react';

import { faSign } from "@fortawesome/free-solid-svg-icons"
import { pkgGerenciador} from "../model/db"

export const noroute = pkgGerenciador.defProcess({
    args: {
        idx: {},
        types: {},
    },
    caption: "Identifique-se",
    icon: faSign,
    id: "noroute",
    roles: "public",
    subscriptions: {},
    vars: {},
}).tasks({
    h: {
        actions: {},
        step() {
            return {
                actions: this.actions,
                caption: "404",
                render() {
                    return <div>erro 404</div>
                },
            }
        }
    }
}).def({
    onOpen() {
        return {
            projectLid: "noroute" as GUID,
            taskId: "h",
        }
    }
})