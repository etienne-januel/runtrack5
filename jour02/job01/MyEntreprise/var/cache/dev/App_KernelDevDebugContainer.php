<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerYuhtKDJ\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerYuhtKDJ/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerYuhtKDJ.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerYuhtKDJ\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerYuhtKDJ\App_KernelDevDebugContainer([
    'container.build_hash' => 'YuhtKDJ',
    'container.build_id' => 'c33e1fcb',
    'container.build_time' => 1600185703,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerYuhtKDJ');
