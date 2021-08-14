import 'antd/dist/antd.css';
import { Table, Tag, Space } from 'antd';
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];


export default function Users() {
    return (
        <>

            {/* Container */}
            <div className="container w-full">
                <div className="m-3">
                    <h1 className="text-gray-900 font-bold">Listagem de usuários</h1>

                </div>
                {/* Card */}
                <div id='recipients' className="p-0 lg:mt-0 rounded shadow bg-white">
                    <Table columns={columns} dataSource={data} />

                    <table id="example" className="stripe hover"
                           style={{width: "100%", paddingTop: "1em", paddingBottom: "1em"}}>
                        <thead>
                        <tr>
                            <th data-priority="1">Name</th>
                            <th data-priority="2">Position</th>
                            <th data-priority="3">Office</th>
                            <th data-priority="4">Age</th>
                            <th data-priority="5">Start date</th>
                            <th data-priority="6">Salary</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Tina May</td>
                            <td>Coffee Manager</td>
                            <td>Ljubljana</td>
                            <td>61</td>
                            <td>2011/04/25</td>
                            <td>$320,800</td>
                        </tr>

                        {/*  Rest of your data (refer to https://datatables.net/examples/server_side/ for server side processing) */}

                        <tr>
                            <td>Donna Snider</td>
                            <td>Customer Support</td>
                            <td>New York</td>
                            <td>27</td>
                            <td>2011/01/25</td>
                            <td>$112,000</td>
                        </tr>
                        </tbody>

                    </table>


                </div>
                {/* /Card */}


            </div>
            {/* /container */}
        </>
    )
}