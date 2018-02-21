import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import Prompt from './Prompt';

export class EditExpensePage extends React.Component {
    state = {
        promptVisible: false
    };

    onRemove = () => {
        this.setState(() => ({ promptVisible: true }) );
    };

    handleCancel = () => {
        this.setState(() => ({ promptVisible: false }) );
    };

    handleRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id})
        this.props.history.push('/');  
    }

    onSubmit = (expense) => {
      this.props.startEditExpense(this.props.expense.id, expense);
      this.props.history.push('/');
    };

    onCancel = () => {
      this.props.history.push('/');
    };
    
    options = [
        {
            label: 'OK',
            id: 'btn-remove-expense',
            onClick: this.handleRemove
        }, {
            label: 'Cancel',
            id: 'btn-cancel',
            onClick: this.handleCancel
        }
    ];
    
    render() {
        return (
            <div>
                <div className='page-header'>
                    <div className='content-container'>
                        <h1 className='page-header__title'>Edit Expense</h1>
                    </div>
                </div>
                <div className='content-container'>
                    <ExpenseForm 
                        expense={ this.props.expense }
                        onSubmit={ this.onSubmit }
                    />
                    <button className='button button--important' onClick={ this.onRemove }>
                        Remove Expense
                    </button>
                </div>
                <Prompt visible={ this.state.promptVisible } onCancel={ this.handleCancel } title='Remove Expense' content="Are you sure you want to remove this expense?" options={ this.options } />
            </div>
        )
    }
};

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id )
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);