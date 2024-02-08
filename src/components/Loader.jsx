export const Loader = ({ count }) => {
    return (
        <div className="grid grid-cols-1 gap-8 p-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {[...Array(count)].map((_, index) => (
                <div key={index} className="relative h-full overflow-hidden rounded-lg shadow-xl bg-slate-400">
                    <div className="h-[50vh] mb-4 bg-gray-500 rounded-lg skeleton-shimmer" />
                    <div className="flex items-center justify-between px-2 mb-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 overflow-hidden bg-gray-500 rounded-full skeleton-shimmer" />
                            <div>
                                <div className="flex flex-col skeleton-shimmer">
                                    <div className="w-20 h-4 mb-2 bg-gray-500"></div>
                                    <div className="w-16 h-4 bg-gray-500"></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4 h-10 px-4 py-2 bg-gray-500 rounded-full skeleton-shimmer" />
                    </div>
                </div>
            ))}
        </div>
    );
};