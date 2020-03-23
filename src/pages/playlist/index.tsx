import React, { PureComponent } from 'react'
import { Layout } from "../../components/Layout";
import List from "../../components/TrackList"
import { rootStore } from '../../models/Root'

import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from "react-router";


type PathParamsType = {
    track: string,
}

type PropsType = RouteComponentProps<PathParamsType> & {}

class Playlist extends PureComponent<PropsType> {
    
    componentDidMount() {
        this.intiateServices();
    }

    componentWillUnmount() {

    }
    intiateServices() {
        this.getTrack()
    }
    getTrack() {
        rootStore.tracksList.fetchTrack(this.props.match.params.track)
    }
    render() {
        return (
            <Layout>
                <div>
                    <List />
                </div>
            </Layout>
        )
    }
}

export default withRouter(Playlist);
