"use client";

import {Button} from 'antd';
import React from 'react';
import {useRouter} from "next/navigation";

const AuthMenu = () => {
    return (
        <div className="col-span-1 flex items-center">
            <Button href="/register">Đăng ký </Button>
            <Button href="/login" type="primary" className="ml-5 bg-[#1677ff]">
                Đăng nhập
            </Button>
        </div>
    );
};

export default AuthMenu;
