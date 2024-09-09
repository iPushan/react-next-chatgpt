export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="p-10 bg-blue-300">{children} </div>;
}
