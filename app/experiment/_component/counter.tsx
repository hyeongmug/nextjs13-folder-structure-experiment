'use client';

import React, { useState } from 'react';
import Button from '@/app/_component/ui/button';

export default function Counter() {
    const [value, setValue] = useState(0);
    return (
        <div>
            <p>
                현재 카운터 값은 <b>{value}</b> 입니다.
            </p>
            <Button onClick={() => setValue(value + 1)}>+1</Button>
            <Button onClick={() => setValue(value - 1)}>-1</Button>
        </div>
    );
};
