import React from 'react'
import { callApis } from '../util/ApiUtils'
import Loadable from 'react-loadable'
import Loading from '../components/Loader'

export default (loader, apis) => {
    const LoadableComponent = Loadable.Map({
        loader: {
            page: () => loader,
            data: () => callApis(apis)
        },
        render(loaded, props) {
            let Page = loaded.page.default;
            let data = loaded.data;
            return <Page {...props} data={data}/>;
        },
        loading: Loading,
        delay: 200,
        timeout: 10,
    });
    return LoadableComponent;
}

