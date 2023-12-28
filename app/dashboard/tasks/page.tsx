
import React, { useState, useEffect } from 'react';
import Hello from '@/app/dashboard/tasks/hello';
import TodoList from '@/app/dashboard/tasks/todo';

export default function Home() {
    return (
        <div>
            <TodoList />
           
        </div>
    );
}