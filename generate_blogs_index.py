"""
自动扫描 blogs 文件夹并生成索引文件
运行方式: python generate_blogs_index.py
"""
import os
import json
from pathlib import Path
import time

def scan_blogs_directory():
    """扫描 blogs 目录并生成索引"""
    blogs_dir = Path(__file__).parent / 'assets' / 'blogs'
    
    if not blogs_dir.exists():
        print(f"Error: Directory {blogs_dir} does not exist")
        return
    
    blog_dirs = []
    
    # 扫描所有子目录
    for item in sorted(blogs_dir.iterdir()):
        if item.is_dir() and not item.name.startswith('.'):
            # 检查是否存在 metadata.json
            metadata_file = item / 'metadata.json'
            content_file = item / 'content.md'
            
            if metadata_file.exists():
                # 相对于项目根目录的路径
                relative_path = f"assets/blogs/{item.name}"
                blog_dirs.append(relative_path)
                print(f"✓ Found blog: {item.name}")
            else:
                print(f"✗ Skipping {item.name} (no metadata.json)")
    
    # 生成索引文件
    index_data = {
        "directories": blog_dirs,
        "count": len(blog_dirs),
        "last_updated": time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
    }
    
    index_file = blogs_dir / 'index.json'
    with open(index_file, 'w', encoding='utf-8') as f:
        json.dump(index_data, f, indent=2, ensure_ascii=False)
    
    print(f"\n✓ Generated index.json with {len(blog_dirs)} blogs")
    print(f"  Location: {index_file}")

if __name__ == '__main__':
    scan_blogs_directory()
