# LRU Cache
LRU Cache is a caching method that stands for Least Recently Used Cache. This is basically a cache of the n most-recently-used items. If something doesn't get looked at / used often enough we trash it. 
* Cache holds `max` items and `max` should be set upon initialization
* When we retreive or set an item in the cache we should mark that the item is now being the most recently used item in the cache.
* When an item is inserted, or the cache exceeds max size, deltet the least recently used item, always keeping the cache size at max or below
* We build an LRU cache with a combo of a hash map and a linked list
* With the combo of a hashmap and linked list we'll achieve O(1) lookup, insertion and deletion time for our cache.