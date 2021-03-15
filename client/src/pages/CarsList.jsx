import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateCar extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/cars/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class CarsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cars: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllCars().then(cars => {
            this.setState({
                cars: cars.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { cars, isLoading } = this.state

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Make',
                accessor: 'make',
                filterable: true,
            },
            {
                Header: 'Model',
                accessor: 'model',
                filterable: true,
            },
            {
                Header: 'Package',
                accessor: 'package',
                filterable: true,
            },
            {
                Header: 'Color',
                accessor: 'color',
                filterable: true,
            },
            {
                Header: 'Year',
                accessor: 'year',
                filterable: true,
            },
            {
                Header: 'Category',
                accessor: 'category',
                filterable: true,
            },
            {
                Header: 'Mileage (mi)',
                accessor: 'mileage',
                filterable: true,
            },
            {
                Header: 'Price (mi)',
                accessor: 'price',
            },
            {
                Header: 'Id',
                accessor: 'id',
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateCar id={props.original._id} />
                        </span>
                    )
                },
            },
        ]


        let showTable = true
        if (!cars.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={cars}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default CarsList
