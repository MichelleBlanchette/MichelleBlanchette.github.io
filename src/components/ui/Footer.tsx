export default function Footer() {
    return (
        <footer className="component-Footer w-full bg-gray-100">
            <div className="max-w-5xl w-full p-8 mx-auto text-center text-sm text-gray-600">
                <p>&copy; {new Date().getFullYear()} Michelle Blanchette. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
