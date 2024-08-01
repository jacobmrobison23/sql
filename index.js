
const inq = require('inquirer');
init();

function init(){
    runPrompts();

}


function runPrompts(){
    inq.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                {
               name: 'View All Employees',
               value: 'view-Employees',
            },         {
               name: 'View All Employees By Department',
               value: 'view-Employees-By-Department',
           },  {
                name: 'View All Employees By Manager',
                value: 'view-Employees-By-Manager',
              },
              {
              name:  'Add Employee',
             value:   'add-Employee',
            },
            {
                name: 'Remove Employee',
                value: 'remove-Employee',
            } , {
            }, {
                name: 'Update Employee Manager',
                value: 'update-employee-manager',
            }, {
            
                name:'View All Roles',
                value: 'view-roles',
            }, {
               name: 'Add Role',
                value: 'add-role',
            }, {
               name: 'Remove Role',
                value: 'remove-role',
            }, {
                name: 'View All Departments',
                value: 'view-departments',
            }, {
               name: 'Add Department',
                value: 'add-department',
            }, {
               name: 'Remove Department',
                value: 'remove-department',
            }, {
                name:'Exit',
                value: 'exit',
            },
            ],
        },
    ]).then((res) => {
        let answer = res.choice;
        switch(answer) {
            case 'view-Employees':
                viewEmployees();
                break;
        }

    });
}

