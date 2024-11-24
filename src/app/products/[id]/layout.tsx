export default function ProductLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <div>
                <h2>Featured products</h2>
            </div>
            {children}
        </div> 
    )
}