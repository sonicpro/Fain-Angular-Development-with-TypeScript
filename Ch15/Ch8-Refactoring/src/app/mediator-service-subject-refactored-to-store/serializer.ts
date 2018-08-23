// Implements RouterStateSerializer interface. Must be registered as provider.
import { RouterStateSerializer } from "@ngrx/router-store";
import { Params, RouterStateSnapshot } from "@angular/router";

// list only the RouterState props we are interesting in.
interface MyRouterState {
    url: string,
    queryParams: Params
}

export class MyRouterSerializer implements RouterStateSerializer<MyRouterState> {
    public serialize(routerState: RouterStateSnapshot): MyRouterState {
        // Object descturcoring:
        const { root: { queryParams }, url } = routerState;
        return { url, queryParams };
    }
}