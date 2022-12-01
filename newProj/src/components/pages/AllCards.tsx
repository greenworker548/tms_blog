import Breadcrumb from 'react-bootstrap/Breadcrumb'

import { Blog } from '../Blog/Blog'
import { PageWrapper } from '../PageWrapper/PageWrapper'
import { Pagination } from '../Pagination/Pagination'
import { PaginationCenterLinks } from '../PaginationCenterLinks/PaginationCenterLinks'
import { Tabs } from '../Tabs/Tabs'
import 'bootstrap/dist/css/bootstrap.min.css'

export const AllCards = () => {
    return (
        <>
            <PageWrapper title={'Blog'}
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                </Breadcrumb>}>
                <Tabs/>
                <Blog/>
                <Pagination>
                    <PaginationCenterLinks/>
                </Pagination>
            </PageWrapper>
        </>
    )
}
