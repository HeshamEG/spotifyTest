import React, { PureComponent } from 'react'

import { Layout } from "../../components/Layout";
import List from "../../components/PlayListPagination"
import { rootStore } from '../../models/Root'


export default class Home extends PureComponent {
    constructor(props: Readonly<{}>) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
    }
    state = {
        height: window.innerHeight,
        offset: '0', limit: '5'
    };
    handleScroll() {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight) {
            rootStore.playListsPagination.fetchList();
        } else if (windowBottom === 0) {
            rootStore.playListsPagination.fetchList();

        }
    }

    componentDidMount() {
        this.intiateServices();
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    intiateServices() {
        rootStore.playListsPagination.fetchList();
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