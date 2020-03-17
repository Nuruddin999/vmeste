import React from 'react';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import StorageIcon from '@material-ui/icons/Storage';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
export const categories = [
      {
            id: 'Меню',
            children: [
                  { id: 'Задания', icon: <AssignmentLateIcon />, active: false, path: "tasks", childCategories: [] },
                  { id: 'Справочники', icon: <StorageIcon />, active: false, path: "directories", childCategories: [{ id: 'Волонтеры', active: false, path: "volunteers" }] },
                  { id: 'Профиль', icon: <AccountBoxIcon />, active: false, path: "profile", childCategories: [] },
            ],
      },
];