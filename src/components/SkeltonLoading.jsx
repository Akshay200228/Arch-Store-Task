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


export const DropDownLoader = ({ count }) => {
    return (
        <div className="absolute z-10 mt-16 overflow-x-hidden overflow-y-auto bg-white rounded-md shadow-md w-72 h-96 text-slate-700 scrollbar-thin scrollbar-thumb-slate-500">
            {[...Array(count)].map((_, index) => (
                <div key={index} className="flex items-center gap-4 p-2 cursor-pointer hover:bg-gray-200">
                    <div className="w-12 h-12 overflow-hidden bg-gray-500 rounded-full skeleton-shimmer" />
                    <div className="flex flex-col">
                        <div className="w-20 h-4 mb-2 bg-gray-500 skeleton-shimmer"></div>
                        <div className="w-16 h-4 bg-gray-500 skeleton-shimmer"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};


export const CharacterDetailsSkeleton = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex justify-center">
                    <div className="w-64 h-64 bg-gray-300 rounded-lg animate-pulse skeleton-shimmer" />
                </div>
                <div>
                    <h2 className="h-10 mb-4 text-3xl font-bold bg-gray-300 rounded-md animate-pulse skeleton-shimmer" />
                    <p className="h-8 mb-2 bg-gray-300 rounded-md animate-pulse" />
                    <p className="h-8 mb-2 bg-gray-300 rounded-md animate-pulse" />
                    <p className="h-8 mb-2 bg-gray-300 rounded-md animate-pulse" />
                    <p className="h-8 mb-2 bg-gray-300 rounded-md animate-pulse" />
                    <p className="h-8 mb-2 bg-gray-300 rounded-md animate-pulse" />
                </div>
            </div>
            <div className="mt-8">
                <h3 className="w-1/2 h-10 mb-4 text-2xl font-bold bg-gray-300 rounded-md animate-pulse skeleton-shimmer" />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-md">
                            <div className="flex items-center justify-center mb-4">
                                <div className="w-32 h-32 bg-gray-300 rounded-full animate-pulse skeleton-shimmer" />
                            </div>
                            <div className="text-center">
                                <div className="w-24 h-6 mb-2 bg-gray-300 rounded-md animate-pulse skeleton-shimmer" />
                                <div className="w-20 h-4 bg-gray-300 rounded-md animate-pulse skeleton-shimmer" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};


export const EpisodeCardSkeleton = ({ count }) => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[...Array(count)].map((_, index) => (
                <div key={index} className="p-4 bg-gray-600 rounded-lg shadow-md">
                    <div className="animate-pulse">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-8 h-8 bg-gray-300 rounded-full" />
                            <div className="w-20 h-4 bg-gray-300 rounded-md" />
                        </div>
                        <h4 className="h-6 mb-2 text-lg font-semibold bg-gray-300 rounded-md" />
                        <p className="h-4 mb-2 bg-gray-300 rounded-md" />
                        <p className="h-4 mb-4 bg-gray-300 rounded-md" />
                        <div className="flex justify-center">
                            <div className="h-10 bg-blue-500 rounded-full w-36 animate-pulse" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};


export const CharacterCardSkeleton = ({ count }) => {
    return (
        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3">
            {[...Array(count)].map((_, index) => (
                <div key={index} className="p-4 bg-gray-600 rounded-lg shadow-md">
                    <div className="animate-pulse">
                        <div className="flex justify-center mb-4">
                            <div className="w-32 h-32 bg-gray-300 rounded-full" />
                        </div>
                        <div className="mb-4 text-center">
                            <div className="h-6 mb-2 bg-gray-300 rounded-md"></div>
                            <div className="h-4 bg-gray-300 rounded-md"></div>
                        </div>
                        <div className="text-center">
                            <div className="h-6 mb-2 bg-gray-300 rounded-md"></div>
                            <div className="h-4 bg-gray-300 rounded-md"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
