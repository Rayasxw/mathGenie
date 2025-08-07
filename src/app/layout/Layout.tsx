import { Suspense, type FC } from "react";
import { Footer } from "../../widgets/footer";
import { Header } from "../../widgets/header";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <main>
                    <Outlet />
                </main>
            </Suspense>
            <Footer />
        </>
    );
};
