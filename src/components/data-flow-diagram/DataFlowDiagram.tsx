/**
 * Visual data-flow diagram showing how user data flows from
 * device → game → analytics / ad networks.
 *
 * Used on: Privacy Summary, Advertising Partners.
 */
export function DataFlowDiagram() {
    return (
        <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5 sm:p-6 overflow-x-auto">
            <div className="flex flex-col items-center gap-2 text-sm min-w-[320px]">
                {/* Device */}
                <div className="bg-neutral-900 text-white rounded-lg px-6 py-3 text-center font-medium w-full max-w-xs">
                    📱 Your Device
                </div>
                <div className="text-neutral-400 text-lg">↓</div>
                {/* App */}
                <div className="bg-white border-2 border-neutral-300 rounded-lg px-6 py-3 text-center font-medium w-full max-w-xs">
                    🎮 Our Game App
                </div>
                <div className="flex gap-8 items-start mt-1">
                    <div className="flex flex-col items-center gap-2">
                        <div className="text-neutral-400 text-lg">↓</div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-center text-xs font-medium">
                            📊 Unity Analytics
                        </div>
                        <div className="text-[11px] text-neutral-500 text-center max-w-30">
                            Gameplay data only<br />(device-bound ID)
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="text-neutral-400 text-lg">↓</div>
                        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 text-center text-xs font-medium">
                            🔀 CAS.ai Mediation
                        </div>
                        <div className="text-neutral-400 text-lg">↓</div>
                        <div className="bg-orange-50 border border-orange-200 rounded-lg px-4 py-2 text-center text-xs font-medium">
                            📢 Ad Networks
                        </div>
                        <div className="text-[11px] text-neutral-500 text-center max-w-35">
                            Advertising ID, IP,<br />device info, ad events
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
