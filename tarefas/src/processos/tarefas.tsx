import * as React from 'react';

import { faUser } from "@fortawesome/free-solid-svg-icons"
import { cadTarefa} from 'src/model/crudTarefa';
import { pkgGerenciador } from "../model/db";


export const tarefas = pkgGerenciador.defProcess({
    args: {
        idx: {},
        types: {},
    },
    caption: "Tarefas",
    icon: faUser,
    id: "tarefas",
    roles: "auth",
    subscriptions: {},
    vars: {},
}).tasks({
    h: {
        actions: {},
        step() {
            return {
                actions: this.actions,
                caption: "Tarefas",
                render() {

                    return <div>
                        <form><input type="checkbox" /> 
                            <input type="text"/>
                        </form>
                        <button onClick={cadastrarTarefa}>Cadastrar</button>
                    </div>
                    function cadastrarTarefa() {
                        cadTarefa("epaa")
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