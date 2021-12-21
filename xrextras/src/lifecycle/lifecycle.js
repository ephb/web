    let t = null;
    const r = () => (
        t ||
            (t = (() => {
                const e = new Set();
                let n = !1,
                    t = null,
                    { XR8: r } = window;
                const i = () => ({
                    name: "xrextraslifecycle",
                    onAttach: (r) => {
                        (t = r), (n = !0), e.forEach((e) => e(t));
                    },
                    onDetach: () => {
                        (n = !1), (t = null);
                    },
                });
                return (
                    r ||
                        window.addEventListener(
                            "xrloaded",
                            () => {
                                (r = window.XR8), e.size && r.addCameraPipelineModule(i());
                            },
                            { once: !0 }
                        ),
                    {
                        add: (o) => {
                            !e.size && r && r.addCameraPipelineModule(i()), e.add(o), n && o(t);
                        },
                        delete: (n) => {
                            e.delete(n) && r && !e.size && r.removeCameraPipelineModule("xrextraslifecycle");
                        },
                    }
                );
            })()),
        t
    );
    e.exports = { LifecycleFactory: () => ({ attachListener: { add: (e) => r().add(e), delete: (e) => r().delete(e) } }) };
